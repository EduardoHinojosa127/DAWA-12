// post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: 'Introducción a la programación',
      description: 'Descubre los conceptos básicos de la programación y aprende a desarrollar tus primeras aplicaciones.',
      image: 'https://optmedialatam.com/wp-content/uploads/7-Tipos-De-Publicaciones-En-Facebook-Que-Debes-Implementar.jpg',
      info: 'Esta publicación fue escrita por John Doe y publicada el 1 de enero de 2023. Pertenece a la categoría de Desarrollo web.'
    },
    {
      id: 2,
      title: 'Recetas saludables para una alimentación balanceada',
      description: 'Explora deliciosas recetas que te ayudarán a mantener una alimentación equilibrada y saludable. ',
      image: 'https://s3-us-west-2.amazonaws.com/wp-roketmkt/wp-content/uploads/2020/10/28154324/como-mejorar-alcance-facebook.jpg',
      info: 'Fue escrita por Jane Smith y publicada el 15 de febrero de 2023. Pertenece a la categoría de Nutrición.'
    },
    // Agrega más objetos de publicaciones ficticias aquí
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // ...
  }

  viewPostDetails(post: any) {
    this.router.navigate(['/post-details/'+post.id], { state: { title: post.title, description: post.description, info: post.info } });
  }
}
