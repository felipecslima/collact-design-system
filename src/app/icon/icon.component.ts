import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cl-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {

  baseUrl = `/assets/icons/`;
  icons = ICON;
  styleIcon;
  listIcon = [];
  bgColor = 'rgba(0,0,0,0.35)';

  constructor() { }

  ngOnInit() {
    this.listIcon = this.formatIcons();
  }


  formatIcons(){
    return this.icons.map((x)=>{
      const pathICon = `${this.baseUrl}${x}.svg`;
      return {'-webkit-mask-image': `url( ${pathICon})`};
    });
  }



}


const ICON = [
// 'cl-1-st-visit',
// 'cl-3-g',
// 'cl-acquisition',
// 'cl-active',
// 'cl-add-circle',
// 'cl-alert-circle',
// 'cl-alert',
// 'cl-arrow-down',
// 'cl-arrow-left',
// 'cl-arrow-right',
// 'cl-arrow-up',
// 'cl-bday',
// 'cl-block',
// 'cl-box',
// 'cl-build',
// 'cl-building',
// 'cl-cards',
// 'cl-check-circle',
// 'cl-check',
// 'cl-checkbox-default',
// 'cl-checkbox-interminate',
// 'cl-checkbox-select',
// 'cl-chevron-down',
// 'cl-chevron-left',
// 'cl-chevron-right',
// 'cl-chevron-up',
// 'cl-clock',
// 'cl-close',
// 'cl-collact',
// 'cl-comment',
// 'cl-copy',
// 'cl-delete',
// 'cl-download',
// 'cl-edit',
// 'cl-enter',
// 'cl-external-links',
// 'cl-feedback',
// 'cl-filter',
'cl-gift',
// 'cl-happy',
// 'cl-help-circle',
// 'cl-home',
// 'cl-inactive',
// 'cl-lamp',
// 'cl-link',
// 'cl-list',
// 'cl-lock',
// 'cl-mail',
// 'cl-menu',
// 'cl-minus',
// 'cl-moeny-stuff',
// 'cl-molecule',
// 'cl-new',
// 'cl-off',
// 'cl-page',
// 'cl-picture',
// 'cl-pin',
// 'cl-plus',
// 'cl-power',
// 'cl-radio-default',
// 'cl-radio-select',
// 'cl-recipt',
// 'cl-refresh',
// 'cl-remove-circle',
// 'cl-search',
// 'cl-send',
// 'cl-share',
// 'cl-shopping-bag',
// 'cl-spinner',
// 'cl-store',
// 'cl-strenth-1',
// 'cl-strenth-2',
// 'cl-strenth-3',
// 'cl-swap',
// 'cl-sync-problem',
// 'cl-tablet',
// 'cl-tag',
// 'cl-univerity',
// 'cl-update',
// 'cl-upload',
// 'cl-user',
// 'cl-view'
]

