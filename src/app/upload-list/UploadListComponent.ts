/**
 * http://blog.rangle.io/dynamically-creating-components-with-angular-2/
 * https://egghead.io/lessons/angular-2-generate-angular-2-components-programmatically-with-entrycomponents
 */
import {Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentRef} from "@angular/core";
import {UploadComponent} from "../upload-compo/UploadComponent";

@Component({
  selector: 'mon-upload-list-composant',
  template: `<div #uploadContainer></div>`,

})
export class UploadListComponent {

  listeUpload: Array<ComponentRef<UploadComponent>> = new Array();

  @ViewChild('uploadContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  /**
   * Ctor;
   * @param resolver
   */
  constructor(private resolver: ComponentFactoryResolver) {
  }

  /**
   * On ajoute un premier composante au debut.
   */
  ngAfterContentInit() {
    this.addUploadWidget();
    this.addUploadWidget();
  }

  /**
   * Append le premier upload
   */
  addUploadWidget() {

    console.log('creation de upload widget....');

    const widgetFactory = this.resolver.resolveComponentFactory(UploadComponent);
    let uploadWidget: ComponentRef<UploadComponent> = this.container.createComponent(widgetFactory);
    this.listeUpload.push(uploadWidget);

    uploadWidget.instance. =

    // ecouter notre enfant
    uploadWidget.instance.notifier.subscribe(event => console.log("emission de notre enfant -----> ", event));
  }

  /**
   * Notification du notre enfant.
   */
  notificationDuWidget() {
    this.addUploadWidget();
  }


}
