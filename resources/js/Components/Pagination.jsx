import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Pagination({ links }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, k) => (
                    /* <Link key={k} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} /> */
                    <li key={k} className={`page-item ${link.active && 'active'} ${link.url === null && 'disabled'}`}>
                        <Link key={k} as="button" disabled={link.url === null && true} className="page-link" href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} />
                    </li>
                ))}
            </ul>
        </nav >
    )
}
