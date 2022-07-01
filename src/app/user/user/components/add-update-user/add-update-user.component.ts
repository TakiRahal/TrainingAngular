import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss']
})
export class AddUpdateUserComponent implements OnInit {


  fgUser!: FormGroup;
  customer!: IUser;

  constructor( private userService: UserService,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder) {

    this.activatedRoute.params.subscribe((value: any) => {
      console.log('value ', value.id);
      if( value?.id ){
        this.userService.fetchById(value.id)
          .subscribe((result: IUser) => {
            console.log('Success ', result);
            this.customer = result;
            this.fgUser.patchValue(this.customer);
          }, error => {
            console.log('Error ', error);
          })
      }
    })
  }

  ngOnInit(): void {

    this.fgUser = this.fb.group({
      id: [null],
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zip: ['', [Validators.required]]
      }),
      skills: this.fb.array([])
    })

    this.addSkills();
  }


  get skills() : FormArray {
    return this.fgUser.get("skills") as FormArray
  }

  addSkills() {
    this.skills.push(new FormGroup({
      skillName: new FormControl('', [Validators.required]),
      skillType: new FormControl('', [Validators.required]),
    }));
  }

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  onSubmit(): void{
    console.log('values ', this.fgUser.getRawValue());
    if( this.fgUser.invalid ){
      alert('invalid form');
      return;
    }

    this.userService.save(this.fgUser.getRawValue())
      .subscribe((result: IUser) => {
        console.log('Success ', result);
      }, error => {
        console.log('Error ', error);
      })
  }

}
