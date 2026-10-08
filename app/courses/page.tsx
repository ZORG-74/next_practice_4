import Link from 'next/link';

interface Course {
    id: string;
    title: string;
}

export default function CoursesPage() {
    const courses: Course[] = [
        { id: 'nextjs', title: 'Next.js с нуля' },
        { id: 'react', title: 'React для начинающих' },
        { id: 'typescript', title: 'TypeScript на практике' },
    ];

    return (
        <div>
            <h1>Курсы</h1>
            <ul>
                {courses.map((c) => (
                    <li key={c.id}>
                        <Link href={`/courses/${c.id}`}>{c.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
