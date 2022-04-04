import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  canvasSize: number = 400
  imageSize: number = 400
  imageUrl: string = "https://kartinkin.net/uploads/posts/2021-07/1625665554_2-kartinkin-com-p-minimalistichnie-oboi-krasivie-2.jpg"

  @HostListener('mousewheel', ['$event'])
  public onResize(event: WheelEvent) {
    if(event.deltaY < 0 && this.imageSize < this.canvasSize) {
      this.imageSize += 15
    } 
    if(event.deltaY >= 0 && this.imageSize > 0) {
      this.imageSize -= 15
    }
  }

  public changeImage(): void {
    const url = String(prompt("Вставте URL картинки:")).trim()
    if(url) {
      this.imageUrl = url
    } else {
      alert("Вставте валидный URL картинки")
    }
  }
}
