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



---

## 🗄 Database & Authentication

This project uses Supabase Authentication for handling users.

When a user signs up with email and password:

- Supabase automatically stores the user in the `auth.users` table.
- Passwords are securely hashed.
- No custom database tables are created in this version.

Authentication Features:
- Email & Password Signup
- Secure Login
- Session Management
- Protected Routes

All authentication logic is handled by Supabase.

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
India 🇮🇳

---

## 📄 License

This project is open-source and available under the MIT License.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel


Check out our [Next.js deployment documentation](https://bookmarkproject-pyd0hni5u-niraj-kumars-projects-efcd4894.vercel.app/) for more details.
