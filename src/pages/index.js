import Container from "@/components/Container";
import { SubjectCards } from "@/components/mytail";

const defaultSubjects = [
  { materia: "Seguridad en el Desarrollo de Software", profesor: "Mtro. Iván Antonio", horario: ' martes 16-18, jueves 14 -16' },
  { materia: "Matemáticas para Ingeniería", profesor: "Mtro. David García", horario: ' miércoles 15-18, viernes 16-18' },
  { materia: "Desarrollo Web Profesional", profesor: "Mtro. Alfonso Felipe", horario: ' jueves 15-16, viernes 13-15' },
  { materia: "Planeación y Organización del trabajo", profesor: "Mtra. María Vázquez", horario: ' martes 14-16, jueves 13-14' },
]

export default function Home() {
  return (
    <Container>
      <SubjectCards subjectsList={defaultSubjects} />
    </Container>
  )
}
