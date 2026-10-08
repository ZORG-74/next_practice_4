import type { ReactNode } from 'react';
import Link from 'next/link';

interface CoursesLayoutProps {
    children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
    return (
        <section style={{ border: '2px solid #4a90e2', padding: '16px', marginTop: '16px' }}>
            <h2>Раздел «Курсы»</h2>
            <nav style={{ marginBottom: '12px' }}>
                <Link href="/courses" style={{ marginRight: '12px' }}>Все курсы</Link>
                <Link href="/courses/nextjs">Next.js</Link>
            </nav>
            {children}
        </section>
    );
}
