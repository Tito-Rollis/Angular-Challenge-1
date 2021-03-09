import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Added } from './added.modal';
import { Cards } from './card.model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @ViewChild('get') get: ElementRef;
  @ViewChild('this') change: ElementRef;
  cards: Cards[] = [
    new Cards('Kokorowatari', "../assets/pic1.jpg", 444, 'Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.'),
    new Cards('Star Platinum', "../assets/pic2.jpg", 555, 'Star Platinum is the Stand of Kujo Jotaro. It has long, flowing hair, and resembling a tall, well-built man. It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.'),
    new Cards('The World', "../assets/pic3.jpg", 500, 'The World is the Stand of DIO. The World shows no particular personality, although it occasionally smiles as it pummels others, hinting that it may be a rather cruel entity that takes pleasure in causing pain. Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!'),
    new Cards('3D Maneuver Gear', "../assets/pic4.jpg", 200, 'The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility. The equipment enables the user to fight in a 3D space as opposed to a 2D one. The equipment itself takes the form of a body harness that encompasses much of the body below the neck.'),
    new Cards('Excalibur', "../assets/pic5.jpg", 300, 'Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur. As that which can be called the physical actualization of her ideals and the symbol of her heroism, it is her greatest and most powerful Noble Phantasm.'),
    new Cards('Dragon Slayer', "../assets/pic6.jpg", 450, 'It was too big to be called a sword. Massive, thick, heavy, and far too rough. Indeed, it was a heap of raw iron. The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.'),
  ];


  chart: Added[] = [
  ];

  total: number = 0;
  tes: string = 'testing';

  add(s: string, p: number) {
    this.chart.push(new Added(s, p));
    this.total += parseInt(this.get.nativeElement.innerHTML) + p;
  }

  buy() {
    if (parseInt(this.get.nativeElement.innerHTML) > 1000) { alert("You don't have enough gold!") }
    else if (parseInt(this.get.nativeElement.innerHTML) === 0) { alert("Please buy anything!") }
    else { alert("Transaction success!") }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
