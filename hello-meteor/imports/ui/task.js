import { Meteor } from 'meteor/meteor';
import {Template} from 'meteor/templating';
import './task.html'

Template.task.events({
    'click .toggle-checked'(){
        // Tasks.update(this._id,{
        //     $set:{ checked:!this.checked },
        // });
        Meteor.call('tasks.setChecked',this._id,!this.checked);
    },
    'click .delete'(){
        Meteor.call('tasks.remove',this._id);
    }

})