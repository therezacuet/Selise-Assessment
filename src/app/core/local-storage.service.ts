import { Injectable } from '@angular/core';
import {Init} from '../shared/model/init';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService extends Init{
  constructor() {
    super();
    this.load();
  }

  getNodes(){
    let nodes = JSON.stringify(localStorage.getItem('node'));
    return JSON.parse(nodes);
  }

  addNodes(data, parentId){
    let nodes = JSON.parse(localStorage.getItem('node'));
    if (parentId === '0'){
      nodes.push(data);
    }
    else {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].childrens !== null){
          console.log(this.addToChildren(nodes[i].childrens,data, parentId));
          //this.addToChildren(nodes[i].childrens,data,parent);
        }
        if (nodes[i].id === parentId) {
          nodes[i].childrens.push(data);
        }
      }
    }
    localStorage.setItem('node', JSON.stringify(nodes));
  }

  addToChildren(childrens,data, parentId){
    for (let i = 0; i < childrens.length; i++) {
      if (childrens[i].childrens !== null){
        if (childrens[i].id === parentId){
          childrens[i].childrens.push(data);
        }
        this.addToChildren(childrens[i].childrens,data, parentId);
      }
    }
  }

  deleteNode(id){
    let nodes = JSON.parse(localStorage.getItem('node'));
    for (let i = 0; i < nodes.length; i++){
      if (nodes[i].childrens !== null && nodes[i].childrens.length > 0){
        if (nodes[i].id === id){
          nodes.splice(i,1);
        }
        else if (nodes[i].childrens !== null && nodes[i].childrens.length>0) {
          console.log(this.deleteChildren(nodes[i].childrens, id));
        }
      }
      else {
        if (nodes[i].id === id){
          nodes.splice(i,1);
        }
      }
    }
    localStorage.setItem('node', JSON.stringify(nodes));
  }

  deleteChildren(childrens,parentId){
    for (let i = 0; i < childrens.length; i++) {
      if (childrens[i].childrens !== null && childrens[i].childrens.length > 0){
        if (childrens[i].id === parentId){
          childrens[i].childrens.splice(i,1);
        }
        else {
          this.deleteChildren(childrens[i].childrens, parentId);
        }
      }
      else {
        if (childrens[i].id === parentId){
          childrens.splice(i,1);
        }
      }
    }
  }

}
