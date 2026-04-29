import sql from 'better-sqlite3';

const db = sql('data.db');

export function getAllNews() {
  const news = db.prepare('SELECT * FROM news').all();
  return news;
}

export function getNewsItem(slug) {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
  return newsItem;
}

export function getLatestNews() {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  return latestNews;
}

export function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
  return years;
}

export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);
  return news;
}

export function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);
  return news;
}
