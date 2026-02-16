# 🔖 Smart Bookmark App

A full-stack Bookmark Management Application built using **Next.js** and **Supabase**.  
Users can securely sign up, log in, and manage their personal bookmarks.

---

## 🚀 Features

- 🔐 Authentication (Google OAuth / Email Login via Supabase)
- ➕ Add new bookmarks
- 🗑 Delete bookmarks
- 📂 Organize links with title & description
- 🔎 Search bookmarks
- 🔒 Private user-specific data
- ⚡ Fast & responsive UI

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** Supabase (Auth + Database)
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/bookmark-app.git
cd bookmark-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in root folder:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these inside:
Supabase Dashboard → Project Settings → API

---

### 4️⃣ Run the development server

```bash
npm run dev
```

Open:
```
http://localhost:3000
```

---

## 🗄 Database Schema

Create a `bookmarks` table in Supabase:

| Column      | Type        |
|------------|------------|
| id         | uuid (PK)  |
| user_id    | uuid (FK)  |
| title      | text       |
| url        | text       |
| created_at | timestamp  |

Enable Row Level Security (RLS) and add policy:

- Users can only access their own bookmarks

---

## 🔐 Authentication Flow

- User signs up / logs in
- Supabase stores user in `auth.users`
- `user.id` is linked to bookmarks table
- Each user sees only their own saved links

---

## 📁 Project Structure

```
app/
 ├── login/
 ├── signup/
 ├── dashboard/
components/
lib/
utils/
```

---

## 🌟 Future Improvements

- Tag system
- Public bookmark sharing
- Drag & drop UI
- Bookmark preview thumbnail
- Web3 wallet login (optional 🚀)

---

## 👨‍💻 Author

Niraj Kumar  
Blockchain & Full Stack Developer  
India 🇮🇳

---

## 📄 License

This project is open-source and available under the MIT License.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
