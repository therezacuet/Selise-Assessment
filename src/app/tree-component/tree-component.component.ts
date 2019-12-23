import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LocalStorageService} from '../core/local-storage.service';
import {Nodes} from '../shared/model/nodes';
import {MatDialog} from '@angular/material';
import {AddNodeDialogComponent} from '../shared/add-node-dialog/add-node-dialog.component';
import {NodeComponent} from '../shared/node/node.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent implements OnInit {
  nodes;
  constructor(private storageService: LocalStorageService,private dialog: MatDialog,) { }

  ngOnInit() {
    //localStorage.clear();
    this.getAllNodes();
  }
  getAllNodes(){
    this.nodes = JSON.parse(this.storageService.getNodes());
    console.log(this.nodes);
  }

  addNode(id:string){

    const dialogRef = this.dialog.open(AddNodeDialogComponent,{
      height: '30%',
      width: '50%',
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe((data: Nodes)=>{
      if (data !== null && data !== undefined) {
        console.log(data);
        this.storageService.addNodes(data,id);
        this.getAllNodes();
      }
    });

  }

  getMessage(message: string) {
    if (message === 'success'){
        this.getAllNodes();
    }
  }

 /* removeNode(id){

    this.storageService.deleteNode(id);
    this.getAllNodes();
  }*/

}
