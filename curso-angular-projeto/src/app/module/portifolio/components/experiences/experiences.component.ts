import { Component, signal } from '@angular/core';
import { IExpiriences } from '../../interfaces/Iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExpiriences[]>([
    {
      sumary: {
        strong: 'Senior Software Enginer ',
        p:'FIT | Agust - 2020 - preset',
      },
      text: '<p>Lorem ipsum dolor sit amet. Sed odio nesciunt aut neque repudiandae et exercitationem optio et dolorum galisum eum saepe accusantium et labore expedita aut sequi veniam. Et error ipsa ut dolorum aspernatur non sint ratione vel porro nihil. Ut unde neque cum voluptas architecto a earum nisi hic iure ducimus qui harum atque ex velit voluptatem. </p><p>Ea temporibus galisum est facilis dicta et ipsum corporis. Aut dolor magni non eius obcaecati aut modi doloribus? Vel impedit impedit est minus impedit 33 velit ratione et sunt eius. </p><p>Vel voluptatem soluta sit velit aspernatur sed quia magnam ut mollitia consequatur ut fugit vero non mollitia quaerat et quisquam nostrum. Cum accusamus expedita est incidunt Quis est magnam error non reiciendis ipsam qui nesciunt dolorum. Nam eius nobis qui dolorum nihil non delectus suscipit vel consequuntur dolores ut voluptas nihil id internos fugit. </p><p>Sit pariatur dicta qui harum excepturi et voluptatem ipsa est ipsum quia et itaque quibusdam non minus veniam ut dolorum repudiandae. Ea libero rerum et ipsa neque hic veritatis temporibus ut explicabo tenetur. Aut nihil temporibus eum officia nemo hic impedit vero a consectetur delectus qui dolores voluptates aut illo quisquam aut autem blanditiis. Et aliquid dignissimos aut eius velit sed modi iusto ut excepturi sequi! </p><p>Ut autem deleniti sit rerum galisum et exercitationem fugit! Non numquam rerum est laudantium tempore At natus dolore et excepturi corrupti sit magnam nostrum et magni dignissimos nam sequi dolores? </p>',
    },
    {
      sumary: {
        strong: 'Peno Software Enginer ',
        p:'P&D | Oct - 2019 - April 2020',
      },
      text: '<p>Lorem ipsum dolor sit amet. Sed odio nesciunt aut neque repudiandae et exercitationem optio et dolorum galisum eum saepe accusantium et labore expedita aut sequi veniam. Et error ipsa ut dolorum aspernatur non sint ratione vel porro nihil. Ut unde neque cum voluptas architecto a earum nisi hic iure ducimus qui harum atque ex velit voluptatem. </p><p>Ea temporibus galisum est facilis dicta et ipsum corporis. Aut dolor magni non eius obcaecati aut modi doloribus? Vel impedit impedit est minus impedit 33 velit ratione et sunt eius. </p><p>Vel voluptatem soluta sit velit aspernatur sed quia magnam ut mollitia consequatur ut fugit vero non mollitia quaerat et quisquam nostrum. Cum accusamus expedita est incidunt Quis est magnam error non reiciendis ipsam qui nesciunt dolorum. Nam eius nobis qui dolorum nihil non delectus suscipit vel consequuntur dolores ut voluptas nihil id internos fugit. </p><p>Sit pariatur dicta qui harum excepturi et voluptatem ipsa est ipsum quia et itaque quibusdam non minus veniam ut dolorum repudiandae. Ea libero rerum et ipsa neque hic veritatis temporibus ut explicabo tenetur. Aut nihil temporibus eum officia nemo hic impedit vero a consectetur delectus qui dolores voluptates aut illo quisquam aut autem blanditiis. Et aliquid dignissimos aut eius velit sed modi iusto ut excepturi sequi! </p><p>Ut autem deleniti sit rerum galisum et exercitationem fugit! Non numquam rerum est laudantium tempore At natus dolore et excepturi corrupti sit magnam nostrum et magni dignissimos nam sequi dolores? </p>',
    },
    {
      sumary: {
        strong: 'Analist sistem',
        p:'ACR Soluções em TI | preset',
      },
      text: '<p>Lorem ipsum dolor sit amet. Sed odio nesciunt aut neque repudiandae et exercitationem optio et dolorum galisum eum saepe accusantium et labore expedita aut sequi veniam. Et error ipsa ut dolorum aspernatur non sint ratione vel porro nihil. Ut unde neque cum voluptas architecto a earum nisi hic iure ducimus qui harum atque ex velit voluptatem. </p><p>Ea temporibus galisum est facilis dicta et ipsum corporis. Aut dolor magni non eius obcaecati aut modi doloribus? Vel impedit impedit est minus impedit 33 velit ratione et sunt eius. </p><p>Vel voluptatem soluta sit velit aspernatur sed quia magnam ut mollitia consequatur ut fugit vero non mollitia quaerat et quisquam nostrum. Cum accusamus expedita est incidunt Quis est magnam error non reiciendis ipsam qui nesciunt dolorum. Nam eius nobis qui dolorum nihil non delectus suscipit vel consequuntur dolores ut voluptas nihil id internos fugit. </p><p>Sit pariatur dicta qui harum excepturi et voluptatem ipsa est ipsum quia et itaque quibusdam non minus veniam ut dolorum repudiandae. Ea libero rerum et ipsa neque hic veritatis temporibus ut explicabo tenetur. Aut nihil temporibus eum officia nemo hic impedit vero a consectetur delectus qui dolores voluptates aut illo quisquam aut autem blanditiis. Et aliquid dignissimos aut eius velit sed modi iusto ut excepturi sequi! </p><p>Ut autem deleniti sit rerum galisum et exercitationem fugit! Non numquam rerum est laudantium tempore At natus dolore et excepturi corrupti sit magnam nostrum et magni dignissimos nam sequi dolores? </p>',
    },    
  ])
}
