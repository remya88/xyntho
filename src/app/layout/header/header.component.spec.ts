import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isCartOpen when the cart icon is clicked', () => {
    const cartIcon = fixture.nativeElement.querySelector('.cursor-pointer');
    expect(component.isCartOpen).toBe(false);
    cartIcon.click();
    fixture.detectChanges();
    expect(component.isCartOpen).toBe(true);
  });
});
