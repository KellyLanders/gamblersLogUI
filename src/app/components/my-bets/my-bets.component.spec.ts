import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBetsComponent } from './my-bets.component';

describe('MyBetsComponent', () => {
  let component: MyBetsComponent;
  let fixture: ComponentFixture<MyBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
