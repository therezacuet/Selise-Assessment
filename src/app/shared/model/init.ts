import {ChildrenNode} from './children-node';
import {Nodes} from './nodes';

export class Init {
  load() {
    if (localStorage.getItem('node') === null || localStorage.getItem('node') === undefined) {
      console.log("No Products found! Need to create");

      let nodes: Nodes[] = [
        {
          id:"1",
          name: "Programming",
          childrens: [
            {
              id:"1",
              name: "Programming",
              childrens: [
                {
                  id: "1",
                  name: "Programming",
                  childrens: null
                }
              ],
            }
          ],
        },
        {
          id:"2",
          name: "Gaming",
          childrens: null,
        },
        {
          id:"3",
          name: "Movie",
          childrens: null,
        },
      ];
      localStorage.setItem('node', JSON.stringify(nodes));
      return;
    }
    else {
      console.log("found node");
    }
  }
}
