import {Component} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {
  public list: Array<TreeNodeModel> = [
    {
      title: 'Root',
      name: 'Corey Clayton',
      children: []
    }
  ]

  ngOnInit() { } 
  deleteNode(item, i, p) {
    if (p) {
      p.children.splice(i, 1);
    } else {
      this.list = [
      //   {
      //   title: 'New entry title',
      //   name: 'New entry name',
      //   children: []
      // }
      ];
    }
  }
  editNode(item, i) {
    item.name_copy = item.name;
    item.title_copy = item.title;
    item.editing = true;
  }
  cancelEditing(item) {
    delete item.name_copy;
    delete item.title_copy;
    delete item.editing;
    delete item.creating;
  }
  doneEditing(item) {
    item.name = item.name_copy;
    item.title = item.title_copy;
    delete item.editing;
    delete item.creating;
  }
  addChildNode(item) {
    item.children.push({
      name: 'New entry name',
      title: 'New entry title',
      children: [],
      creating: true
    })
  }
  
}
export class TreeNodeModel {
  name;
  title;
  children: Array<TreeNodeModel>
}