// import { Component, OnInit } from '@angular/core';
// import {ConditionersForDetails} from '../../models/ConditionersForDetails';
// import {AbstractConditionerService} from '../../services/abstract-conditioner-service';
//
// @Component({
//   selector: 'app-conditioner-edit',
//   templateUrl: './conditioner-edit.component.html',
//   styleUrls: ['./conditioner-edit.component.css']
// })
// export class ConditionerEditComponent implements OnInit {
//   conditioner: ConditionersForDetails;
//
//   constructor(private conditionerService: AbstractConditionerService,
//               private route: ActivatedRoute,
//               private router: Router) { }
//
//   ngOnInit(): void {
//     const uuid = this.route.snapshot.paramMap.get('id');
//     this.conditionerService.getConditioner(uuid).subscribe(cond => this.conditioner = cond);
//   }
//
//   update(conditioner: any) {
//
//   }
//
//   cancel() {
//
//   }
// }
