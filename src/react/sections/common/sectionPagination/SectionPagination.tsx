import React, { memo } from 'react'
import styles from './styles.module.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IPages } from '../../../pages/main/Main'
import { ResGetAllProducts } from '../../../../scripts/api/products'

interface Props {
    pages: IPages
    onChangePage?: (page: number) => void
}


export const SectionPagination = memo(({
    pages,
    onChangePage
}: Props) => {
    const { page, remainingPages } = pages;
    const MAX_VISIBLE = 4;

    const generatePages = (start: number, count: number) => {
        return Array.from({ length: count }, (_, i) => start + i);
    };

    const prevPagesArr = () => {
        if (page <= 1) return [];
        const start = Math.max(1, page - MAX_VISIBLE);
        return generatePages(start, page - start);
    }

    const nextPagesArr = () => {
        if (remainingPages <= 0) return [];
        const end = Math.min(pages.totalPages, page + MAX_VISIBLE);
        return generatePages(page + 1, end - page);
    };



    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {
                    <div
                        onClick={() => !!prevPagesArr().length && onChangePage?.(+page - 1)}
                        className={`${styles.button} ${!prevPagesArr().length && styles.button_disabled}`}
                    >
                        <ChevronLeft size={18} strokeWidth={2} />
                    </div>
                }

                {
                    <div className={styles.list_button}>
                    {prevPagesArr().map(p => (
                        <div key={p} className={styles.button} onClick={() => onChangePage?.(p)}>{p}</div>
                    ))}
                    <div className={`${styles.button} ${styles.button_active}`}>{page}</div>
                    {nextPagesArr().map(p => (
                        <div key={p} className={styles.button} onClick={() => onChangePage?.(p)}>{p}</div>
                    ))}
                    </div>
                }

                {
                    <div
                        onClick={() => !!nextPagesArr().length && onChangePage?.(+page + 1)}
                        className={`${styles.button} ${!nextPagesArr().length && styles.button_disabled}`}
                    >
                        <ChevronRight size={18} strokeWidth={2} />
                    </div>
                }


            </div>
        </div>
    )
})
