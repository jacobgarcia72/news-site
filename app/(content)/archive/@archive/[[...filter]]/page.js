import NewsList from "@/components/news-list";
import { getAbbreviatedMonth } from "@/lib/format";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

function FilterHeader({ year, month }) {
    const availableYears = getAvailableNewsYears();
    let links = availableYears;

    if (
        year && !availableYears.includes(year) ||
        month && !getAvailableNewsMonths(year).includes(month)
    ) {
        throw new Error('Invalid filter.')
    }

    if (year && !month) {
        links = getAvailableNewsMonths(year);
    } else if (year && month) {
        links = [];
    }
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        let href = `/archive/${link}`;
                        let linkDisplayText = link;
                        if (year) {
                            href = `/archive/${year}/${link}`;
                            linkDisplayText = getAbbreviatedMonth(Number(link));
                        }
                        return (
                            <li key={link}>
                                <Link href={href}>
                                    {linkDisplayText}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}


function FilteredNews({ year, month }) {
    let news;
    if (year && !month) {
        news = getNewsForYear(year);
    } else if (year && month) {
        news = getNewsForYearAndMonth(year, month);
    }
    if (news && news.length) {
        return <NewsList articles={news} />
    } else {
        return <p>No news found for the selected time period.</p>
    }
}

export default function FilteredNewsPage({ params }) {
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth= filter?.[1];
    return (
        <>
            <Suspense fallback={<p>Loading filter options...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    )
}
