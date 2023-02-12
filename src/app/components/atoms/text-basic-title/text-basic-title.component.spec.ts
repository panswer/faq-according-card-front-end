import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBasicTitleComponent } from './text-basic-title.component';

describe('TextBasicTitleComponent', () => {
  let component: TextBasicTitleComponent;
  let fixture: ComponentFixture<TextBasicTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBasicTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBasicTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
