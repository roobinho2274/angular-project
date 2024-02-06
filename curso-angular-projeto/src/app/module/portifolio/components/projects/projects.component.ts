import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProject = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      width: '100px',
      height: '50px',
      description:
        '<p>Lorem ipsum dolor sit amet. Vel unde laudantium et internos pariatur id omnis facilis ea maxime praesentium non enim voluptas. Eum minus laborum ut omnis iure vel dignissimos internos ex eaque consequuntur est nobis earum vel aliquam pariatur qui molestiae dolorem. Ut eius error qui quod voluptatum qui animi iusto et exercitationem laborum aut neque expedita non quis similique hic earum pariatur? </p><p>Ad voluptatum vero sed porro saepe ut porro tempore. Aut accusamus pariatur qui dolorem maxime qui autem quisquam et dignissimos sapiente ut excepturi omnis qui possimus expedita aut temporibus galisum. Aut galisum voluptas 33 eaque doloribus et voluptas vitae. Aut labore fuga ea dignissimos nulla est doloribus laudantium non cupiditate voluptatum ut alias aspernatur rem tempora vitae et molestiae odit. </p><p>Sed facere rerum sed odit voluptates eos placeat pariatur et iste eligendi qui delectus veritatis. 33 obcaecati nihil non obcaecati autem est animi consequatur ut alias optio qui repellendus laboriosam. </p><p>Ut excepturi velit ut veritatis iusto ut quasi distinctio aut magnam ipsa est quia minus. Aut veniam atque sit quaerat cumque et modi ullam et voluptatem commodi. Aut voluptates autem ab voluptate autem ut exercitationem laudantium et voluptas reiciendis. Qui nemo repellendus aut nisi quisquam aut harum quisquam et nemo officiis vel molestias incidunt. </p><p>33 galisum voluptatem quo labore repudiandae 33 natus sint! Eum delectus numquam ut corporis voluptates in obcaecati debitis et labore amet est esse veniam. </p>',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        },
      ],
    }]);
}
