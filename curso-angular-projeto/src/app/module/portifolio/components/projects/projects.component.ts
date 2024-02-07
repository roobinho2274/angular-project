import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  dialog = inject(MatDialog);
  
  public arrayProject = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      width: '100px',
      height: '50px',
      description:
        '<p>Lorem ipsum dolor sit amet. Vel unde laudantium et internos pariatur id omnis facilis ea maxime praesentium non enim voluptas. Eum minus laborum ut omnis iure vel dignissimos internos ex eaque consequuntur est nobis earum vel aliquam pariatur qui molestiae dolorem. Ut eius error qui quod voluptatum qui animi iusto et exercitationem laborum aut neque expedita non quis similique hic earum pariatur? </p><p>Ad voluptatum vero sed porro saepe ut porro tempore. Aut accusamus pariatur qui dolorem maxime qui autem quisquam et dignissimos sapiente ut excepturi omnis qui possimus expedita aut temporibus galisum. Aut galisum voluptas 33 eaque doloribus et voluptas vitae. Aut labore fuga ea dignissimos nulla est doloribus laudantium non cupiditate voluptatum ut alias aspernatur rem tempora vitae et molestiae odit. </p>',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
        },
      ],
    }
  
  ]);

  public openDialog(data: IProjects){
    this.dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
