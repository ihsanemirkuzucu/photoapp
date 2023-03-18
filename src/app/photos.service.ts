import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface CallResponse {
  urls: {
    regular:string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }
  getPhotos()
  {
    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random',
    {
      headers:
      {
        Authorization: 'Client-ID DPh0k-2If0F49XU-xe9bxVSisP__8OhBuEahTaiJdBQ'
      }
    });
  }
}
