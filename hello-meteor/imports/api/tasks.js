import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Mongo } from 'meteor/mongo'

export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    'tasks.insert'(text){
        check(text,String);
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized')
        }
        Tasks.insert({
            text,
            createAt:new Date(),
            owner:Meteor.userId(),
            username:Meteor.user().username,
        });
    },
    'tasks.remove'(taskId){
        check(taskId,String);
        Tasks.remove(taskId);
    },
    'tasks.setChecked'(taskId,setChecked){
        check(taskId,String);
        check(setChecked,Boolean);
        Tasks.update(taskId,{ $set:{checked:setChecked} })
    }
})