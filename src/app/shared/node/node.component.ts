import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Nodes} from '../model/nodes';
import {LocalStorageService} from '../../core/local-storage.service';
import {MatDialog} from '@angular/material';
import {AddNodeDialogComponent} from '../add-node-dialog/add-node-dialog.component';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() childMessage: Nodes;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  constructor(private storageService: LocalStorageService,private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  addNode(id:string){
    const dialogRef = this.dialog.open(AddNodeDialogComponent,{
      height: '30%',
      width: '50%',
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe((data: Nodes)=>{
      if (data !== null && data !== undefined) {
        console.log("sdfdsfdsfdssd"+data);
        this.storageService.addNodes(data,id);
        this.sendMessageToParent("success");
      }
    });
  }

  removeNode(id){
    this.storageService.deleteNode(id);
    this.sendMessageToParent("success");
  }


  sendMessageToParent(message: string) {
    this.onSuccess.emit(message)
  }

}
