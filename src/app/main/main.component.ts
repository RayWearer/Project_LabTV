import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{

  movies: any[] = [
    {
      title: 'Titanic',
      imgSrc: './assets/img/titanic.jpg',
      synopsis: 'Un film epico che racconta la storia di un naufragio e la storia d\'amore tra due giovani dei passeggeri a bordo della nave RMS Titanic.'
    },
    {
      title: 'Shining',
      imgSrc: './assets/img/shining.jpg',
      synopsis: 'Un uomo assume la posizione di custode invernale di un isolato e spettrale hotel, ma la sua sanità mentale inizia a sgretolarsi sotto l\'influenza delle forze soprannaturali presenti nel luogo.'
    },
    {
      title: 'Spiderman 2',
      imgSrc: './assets/img/spiderman.jpg',
      synopsis: 'Il giovane Peter Parker, dopo essere stato morso da un ragno geneticamente modificato, acquisisce incredibili poteri e decide di usare le sue abilità per proteggere la città.'
    },
    {
      title: 'American Psycho',
      imgSrc: './assets/img/american_psycho.jpg',
      synopsis: 'Un giovane uomo benestante nasconde la sua vera natura di spietato assassino seriale dietro una maschera di normalità e successo nell\'ambiente di Wall Street.'
    },
    {
      title: 'Fight Club',
      imgSrc: './assets/img/fight_club.jpg',
      synopsis: 'Un uomo depresso e insoddisfatto incontra un carismatico sconosciuto, e insieme fondano un club segreto dove uomini frustrati combattono fisicamente per liberare la loro rabbia e frustrazione.'
    },
    {
      title: 'Inception',
      imgSrc: './assets/img/inception.jpg',
      synopsis: 'Un gruppo di ladri professionisti entra nei sogni delle persone per rubare informazioni preziose, ma una nuova missione di impiantare un\'idea invece di rubarla li mette alla prova.'
    },
    {
      title: 'Joker',
      imgSrc: './assets/img/joker.jpg',
      synopsis: 'Questo film offre un nuovo adattamento sulla storia del celebre villain, il Joker, esplorando le origini di Arthur Fleck, un uomo instabile che diventa l\'infame criminale di Gotham City.'
    }
  ];

  series: any[] = [
    {
      title: 'Mr Robot',
      imgSrc: './assets/img/mr_robot.jpg',
      synopsis: 'Un ingegnere informatico di nome Elliot si intreccia con un gruppo segreto di hacker con l\'obiettivo di abbattere le corporazioni corrotte e smantellare il sistema corrotto. Mentre combatte le sue demoni interiori e lotta con la realtà, Elliot si trova al centro di un avvincente thriller tecnologico.',
      epNum: 10
    },
    {
      title: 'Breaking Bad',
      imgSrc: './assets/img/breaking_bad.jpg',
      synopsis: 'Walter White, un insegnante di chimica delle scuole superiori, si dedica alla produzione e vendita di metanfetamine dopo essere stato diagnosticato con un cancro terminale. Man mano che si addentra nel pericoloso mondo del traffico di droga, diventa il famigerato signore della droga conosciuto come Heisenberg.',
      epNum: 7
    },
    {
      title: 'How I Met Your Mother',
      imgSrc: './assets/img/himym.jpg',
      synopsis: 'Ted Mosby racconta ai suoi figli la sua storia di come ha incontrato la loro madre. Insieme ai suoi stravaganti amici, Marshall, Lily, Barney e Robin, Ted affronta la vita, l\'amore e l\'amicizia nella città di New York.',
      epNum: 4
    },
    {
      title: 'The Office',
      imgSrc: './assets/img/office.jpg',
      synopsis: 'Una sitcom in stile mockumentary segue la vita quotidiana dei dipendenti della filiale di Scranton, Pennsylvania, della Dunder Mifflin, un\'azienda di forniture per ufficio. Tra assurdità e umorismo, lo show esplora le dinamiche tra i colleghi e il loro eccentrico capo, Michael Scott.',
      epNum: 6
    },
    {
      title: 'Peaky Blinders',
      imgSrc: './assets/img/peaky_blinders.jpg',
      synopsis: 'Ambientata nella Birmingham dell\'Inghilterra del dopoguerra, la serie segue la famiglia Shelby, guidata da Tommy Shelby. In qualità di spietato gangster, Tommy cerca di espandere l\'impero criminale della sua famiglia, i Peaky Blinders, mentre si muove in un mondo pericoloso fatto di politica, crimine e tradimenti.',
      epNum: 7
    }
  ];

  animations: any[] = [
    {
      title: 'Si Alza Il Vento',
      imgSrc: './assets/img/vento.jpg',
      synopsis: 'Si Alza Il Vento racconta la vita di Jiro Horikoshi, l\'ingegnere aeronautico giapponese che progettò molti dei famosi aerei da caccia utilizzati nella Seconda Guerra Mondiale...'
    },
    {
      title: 'Akira',
      imgSrc: './assets/img/akira.jpg',
      synopsis: 'Akira è un film d\'animazione ambientato in un futuro post-apocalittico nel 2019, a Neo Tokyo, una città devastata da esplosioni atomiche. La trama ruota attorno a due amici...'
    },
    {
      title: 'Ghost in the Shell',
      imgSrc: './assets/img/ghost.jpg',
      synopsis: 'Ghost in the Shell è un film d\'animazione giapponese ambientato in un futuro distopico in cui il confine tra umano e macchina è sfumato, il film segue il Maggiore Motoko Kusanagi, un cyborg super soldato, e la sua squadra speciale della Sezione 9. La trama si concentra sulla ricerca di un misterioso hacker noto come il Puppet Master, che mette in discussione la natura stessa dell\'identità umana e della coscienza.'
    },
    {
      title: 'Porco Rosso',
      imgSrc: './assets/img/porco_rosso.jpg',
      synopsis: 'Porco Rosso è un film d\'animazione la cui storia è ambientata nel periodo tra le due guerre mondiali e segue le avventure di Porco Rosso, un pilota di caccia trasformato in maiale antropomorfo a causa di una misteriosa maledizione. Porco Rosso lavora come cacciatore di taglie aereo e protegge le navi mercantili dai pirati dell\'aria. Il film esplora temi di onore, identità e amore.'
    },
    {
      title: 'Il Pianeta Del Tesoro',
      imgSrc: './assets/img/pianeta_del_tesoro.jpg',
      synopsis: 'Il Pianeta Del Tesoro è un film d\'animazione liberamente ispirato al romanzo L\'Isola Del Tesoro di Robert Louis Stevenson, ma ha una moderna ambientazione spaziale. Segue le avventure del giovane Jim Hawkins e della sua ricerca del leggendario pianeta del tesoro, un luogo mitico pieno di ricchezze e segreti. Il film combina l\'azione avventurosa con il tema universale del coraggio e della crescita personale.'
    }
  ];

  selectedMovie: any;
  selectedSerie: any;
  selectedAnimation: any;

  seriesEpisodes: number[] = [];

  @ViewChild('moviesSlider') moviesSlider!: ElementRef;
  @ViewChild('seriesSlider') seriesSlider!: ElementRef;
  @ViewChild('animationsSlider') animationsSlider!: ElementRef;
  @ViewChild('episodesSlider') episodesSlider!: ElementRef;

  constructor(private popupService: PopupService) {

  }

  openWindow(windowType: string, data?: any) {
    switch (windowType) {
      case 'movie':
        this.selectedMovie = data;
        break;
      case 'serie':
        this.selectedSerie = { ...data, screenCaps: data.title.toLowerCase().replace(/\s/g, '_') };
        this.seriesEpisodes = Array.from({ length: data.epNum }, (index: number) => index + 1);
        break;
      case 'animation':
        this.selectedAnimation = data;
        break;
    }
    this.popupService.openPopup(windowType);
  }

  closeWindow(windowType: string, event: Event) {
    event.preventDefault();
    switch (windowType) {
      case 'movie':
        this.selectedMovie = null;
        break;
      case 'serie':
        this.selectedSerie = null;
        break;
      case 'animation':
        this.selectedAnimation = null;
        break;
    }
    this.popupService.closePopup();
  }

  private getSliderElement(sliderId: string): ElementRef | null {
    switch (sliderId) {
      case 'moviesSlider':
        return this.moviesSlider;
      case 'seriesSlider':
        return this.seriesSlider;
      case 'animationsSlider':
        return this.animationsSlider;
      case 'episodesSlider':
        return this.episodesSlider;
      default:
        return null;
    }
  }

  private moveSlider(sliderId: string, direction: 'left' | 'right') {
    const slider = this.getSliderElement(sliderId);
    if (!slider) return; //Early statement return

    const firstPoster = slider.nativeElement.firstElementChild;
    const lastPoster = slider.nativeElement.lastElementChild;

    if (direction === 'right' && firstPoster) {
      slider.nativeElement.appendChild(firstPoster);
    } else if (direction === 'left' && lastPoster) {
      slider.nativeElement.insertBefore(lastPoster, slider.nativeElement.firstElementChild);
    }
  }

  moveSliderLeft(sliderId: string) {
    this.moveSlider(sliderId, 'left');
  }

  moveSliderRight(sliderId: string) {
    this.moveSlider(sliderId, 'right');
  }

}