import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : ` 
  <div class="container  "  style="margin-top : 30px ;" >
  <h1>Todo App</h1>
  <hr>
  <div *ngIf="!isUpdateFormActive; else active">
  <div class="form-group">   
    <label for="work">yapılacak iş</label>
    <input 
     type="text"
     class="form-control"
     [ngClass]="changeInputClass()"
     id="work"
      name="work"
      [(ngModel)]="work" >  
      <div class="invalid-feedback" >
        en az 3 karakter girmelisiniz
      </div>

  </div>
  <div class="form-group mt-2">
    <button
    [disabled]="work.length < 3 "
     class="btn btn-outline-primary w-100"
     (click)="save()"  >
     
      kaydet
    </button>
  </div>
  </div>
              
           
           
          
            
        
  <ng-template #active>
  <div class="form-group">   
    <label for="work">yapılacak iş</label>
    <input 
     type="text"
     class="form-control"
     id="work"
      name="work"
      [(ngModel)]="updateWork" >
  </div>
  <div class="form-group mt-2">
    <button (click)="update()"
     class="btn btn-outline-warning w-100"
       >  
      Güncelle
    </button>
    <button (click)="cancel()"
    class="btn btn-outline-danger w-100 mt-2">vazgeç
  </button>
  </div>
</ng-template>
  <hr>
  <ul>
    <li *ngFor="let w of works let i=index">
      {{w}}
      <div  *ngIf="!isUpdateFormActive">
      <button  (click)="get(w,i)"
       class="btn btn-outline-warning btn-sm" >
        Güncelle </button>
      <button class="btn btn-outline-danger btn-sm mx-1"
      (click)="remove(i)" >
      Sil
    </button>
    </div>
    </li>
  </ul>
  </div>



`
})
export class AppComponent {
  isUpdateFormActive :boolean =false;
  work : string ="";
  updateWork: string ="";
  works : string []= ["deneme1 ","deneme2" , "deneme 3"];

  index : number =0 ;
  save(){
   this.works.push(this.work);
   this.work="";
  }
  remove(index : number){
  let result : boolean=confirm("kaydı silmek istiyormusunuz");   
  if(result){
    this.works.splice(index,1);
  }  }
  get(work : string , index : number){
    this.index=index;
    this.updateWork=work;
       this.isUpdateFormActive =true; }
  update(){  
       this.works[this.index] =this.updateWork;
       this.cancel();
  }    
  cancel(){
    this.isUpdateFormActive=false;
  }
  changeInputClass(){
    if(this.work.length<3)
    return "is-invalid"

    
  return " is-valid"
  }
  
}

