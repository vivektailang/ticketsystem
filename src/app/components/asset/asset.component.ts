import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../services/asset.service';
import { Asset } from './asset';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  assets: Asset[] = [];
  displayedColumns: string[] = ['id','desc', 'type','action'];

  constructor(private assetService: AssetService) {
    this.getAssetInfo('VCURR');
  }

  ngOnInit(): void {

  }

  getAssetInfo(type: string) {

    this.assetService.getAssets(type).subscribe(
            (response:any)=>{
              console.log('in asset service call');
              this.assets = response;

            },
            error=>{
              console.log("Error = " + error.message);
            }
         )

  }

}
