import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { RequestService } from 'src/app/shared/services/request.service';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-book-full-information',
  templateUrl: './book-full-information.component.html',
  styleUrls: ['./book-full-information.component.css']
})
export class BookFullInformationComponent implements OnInit, AfterViewInit {

  @Input() public book: Book;
  @ViewChildren('elements') public textElements: QueryList<ElementRef>;
  @ViewChildren('image') public imgElement: QueryList<ElementRef>;
  public bookName: string[];
  public bookId: string;
  public readonly backgroundColorForRating = "black";
  public isShow = false;
  private imageElement: ElementRef;

  constructor(private _requestService: RequestService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRouteParameters();
    this.getBook();
  }

  ngAfterViewInit(): void {
    this.textElements.changes.subscribe((h1Elements: QueryList <ElementRef>) => {

      this.imgElement.changes.subscribe((imageElement: QueryList <ElementRef>) => {
        this.imageElement = imageElement.first;

        h1Elements.forEach(element => {
          this.computeRange(element);
        });
      });
    });
  }

  private getRouteParameters() {
    this._route.params
    .subscribe(params => {
      this.bookId = params['id'];
    });
  }

  private getBook() {
    this._requestService.getData("books/getbook?id=" + this.bookId)
    .subscribe((book: Book) => {
      this.book = book;
      this.bookName = [...this.book.name];
      this.isShow = true;
    });
  }

  private computeRange(textElement: ElementRef) {
    const pPoints = textElement.nativeElement.getBoundingClientRect();
    const imgPoints = this.imageElement.nativeElement.getBoundingClientRect();
    console.log(textElement);

    if (this.isInRangeOfImage(pPoints, imgPoints)) {
      textElement.nativeElement.style.setProperty('--left-color', 'black');
      textElement.nativeElement.style.setProperty('--right-color', 'black');
    }
    // if letter inside border
    else if (this.isRightPartInRangeOfImage(pPoints, imgPoints)) {
      let difference = imgPoints.left - pPoints.left;
      let percentageLeftSide = difference / pPoints.width * 100;

      textElement.nativeElement.style.setProperty('--left-percent', percentageLeftSide + "%");
      textElement.nativeElement.style.setProperty('--right-percent', 100 - percentageLeftSide + "%");
      textElement.nativeElement.style.setProperty('--right-color', 'black');

      return;
    }
    else if (this.isLeftPartInRangeOfImage(pPoints, imgPoints)) {
      let difference = pPoints.right - imgPoints.right;
      let percentageRightSide = difference / pPoints.width * 100;

      textElement.nativeElement.style.setProperty('--right-percent', percentageRightSide + "%");
      textElement.nativeElement.style.setProperty('--left-percent', 100 - percentageRightSide + "%");
      textElement.nativeElement.style.setProperty('--left-color', 'black');

      return;
    }
  }

  private isInRangeOfImage(pPoints: DOMRect, imgPoints: DOMRect) {
    return pPoints.top > imgPoints.top && pPoints.bottom < imgPoints.bottom &&
           pPoints.left > imgPoints.left && pPoints.right < imgPoints.right;
  }

  private isRightPartInRangeOfImage(pPoints: DOMRect, imgPoints: DOMRect) {
    return pPoints.left < imgPoints.left && pPoints.right < imgPoints.right && pPoints.right > imgPoints.left;
  }

  private isLeftPartInRangeOfImage(pPoints: DOMRect, imgPoints: DOMRect) {
    return pPoints.left > imgPoints.left && pPoints.right > imgPoints.right && pPoints.left < imgPoints.right;
  }
}
