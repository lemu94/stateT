# StateTService - Gestion d'état générique pour Angular

`StateTService` est un service générique conçu pour gérer les états de composants dans une application Angular. Il permet de stocker, accéder et manipuler des états de manière typée, flexible et modulaire.

## Caractéristiques

- **Gestion générique d'état** : Permet de stocker et accéder aux états de différents composants.
- **Typage fort** : Utilise des types génériques (`T`, `H`) pour s'assurer que les états sont manipulés correctement.
- **Vérification des types dynamiques** : Permet de filtrer ou transformer les états récupérés en vérifiant leur type.
- **Modulaire et injectable** : Peut être injecté dans n'importe quel composant ou service Angular.

## Installation

1. Clonez le projet :
    ```bash
    git clone <URL_DU_PROJET>
    ```

2. Installez les dépendances du projet :
    ```bash
    npm install
    ```

3. Ajoutez le service dans votre module Angular :
    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { StateTService } from './path-to-service/state-t.service';

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule],
      providers: [StateTService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

## Utilisation

### 1. Importation du service

Commencez par importer et injecter le `StateTService` dans votre composant Angular :

```typescript
import { Component } from '@angular/core';
import { StateTService } from './path-to-service/state-t.service';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'State Management Example';
  
  constructor(private stateService: StateTService<Person>) {}

  ngOnInit() {
    const person: Person = { name: 'John', age: 30 };
    
    // Stocker un état
    this.stateService.setState('person1', person);

    // Récupérer un état
    const storedPerson = this.stateService.getState('person1');
    console.log(storedPerson); // { name: 'John', age: 30 }
  }
}
