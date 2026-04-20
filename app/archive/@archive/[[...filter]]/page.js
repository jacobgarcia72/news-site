import NewsList from "@/components/news-list";
import { getAbbreviatedMonth } from "@/lib/format";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth= filter?.[1];

    let news; 
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    } else if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected time period.</p>

    if (news && news.length) {
        newsContent = <NewsList articles={news} />
    }

    if (
        selectedYear && !getAvailableNewsYears().includes(+selectedYear) ||
        selectedMonth && !getAvailableNewsMonths().includes(+selectedMonth)
    ) {
        throw new Error('Invalid filter.')
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            let href = `/archive/${link}`;
                            let linkDisplayText = link;
                            if (selectedYear) {
                                href = `/archive/${selectedYear}/${link}`;
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
            {newsContent}
        </>
    )
}
