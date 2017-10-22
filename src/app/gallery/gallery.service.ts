import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {

  constructor() { }

  GetGalleryJSON():any {
  return this.galleryJSON;
  }

private galleryJSON :any[] =
[{
    'Name': "gNotes",
    'ImageURL': "/assets/gNotesScreenShot.jpg",
    'ItemURL': "https://www.microsoft.com/en-us/store/apps/gnotes/9nblggh4t368",
    'Value': 1,
    'Description': "gNotes"
    },
    {
    'Name': "SkyNotes 305",
    'ImageURL': "/assets/SkyNotes305ScreenShot.jpg",
    'ItemURL': "http://apps.microsoft.com/windows/en-us/app/sky-notes-305/df2a6fc0-f572-4fbb-a442-afed6da5d7a4",
    'Value': 2,
    'Description': "Sky Notes 305"
    },

    {
    'Name': "NotePad 305",
    'ImageURL': "/assets/NotePad305ScreenShot.jpg",
    'ItemURL': "http://apps.microsoft.com/windows/en-us/app/notepad-305/0abf6c54-4247-4972-82ee-9d3b687fad3f",
    'Value': 3,
    'Description': "NotePad 305"
    },
    {
    'Name': "CutPaste",
    'ImageURL': "/assets/CutPasteScreenShot.jpg",
    'ItemURL': "http://apps.microsoft.com/windows/en-us/app/cutpaste/2e238216-17c3-4ad6-a705-501ee48fad23",
    'Value': 4,
    'Description': "CutPaste"
    }];
}
