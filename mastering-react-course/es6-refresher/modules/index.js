// default export without braces, names export with braces
import Teacher , { promote } from './teacher'

const teacher = new Teacher('Mosh', 'MSc')
teacher.teach()
promote()