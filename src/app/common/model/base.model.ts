export interface IBase {
  id?: string;
}
export abstract class Base implements IBase {

  id?: string;

  constructor(json: any = {}) {
    Object.assign(this, json);
    this.id = json && (json.$key || json.id);
  }

  toJSON(): any {
    let obj:any = {};
    Object.assign(obj, this);
    for (let key in obj) {
      if (!obj[key]) {
        delete obj[key];
      }
      if(key.startsWith('_')) {
        delete obj[key];
      }
    }
    delete obj.id;

    return obj;
  }
}
