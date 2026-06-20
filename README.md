# 📸 Our Memories - Flip Card Photo Gallery

A beautiful, interactive flip card gallery to showcase your favorite family and friends photos with cute messages!

## ✨ Features
- 💫 **Flip Card Animation** - Hover or tap to flip and reveal messages
- 💕 **Cute Messages** - Add personalized memories to each photo
- 📅 **Date & Place** - Show when and where each memory was made
- 📱 **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- 🎨 **Beautiful Gradient** - Stunning purple gradient background

## 🚀 Quick Start

### 1. Add Your Photos
1. Create a folder named `photos` in the root directory
2. Add your 10-15 favorite photos to this folder
3. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.

### 2. Edit Your Memories
Open `script.js` and customize the `photos` array with your own memories:

```javascript
const photos = [
    {
        image: 'photos/photo1.jpg',
        message: 'Your cute message here! 💕',
        date: 'June 15, 2024',
        place: 'Location Name'
    },
    {
        image: 'photos/photo2.jpg',
        message: 'Another awesome memory! 🎉',
        date: 'May 20, 2024',
        place: 'Another Location'
    },
    // Add more photos following the same pattern
];
```

### 3. View Your Gallery
Your site will be live at: `https://itsjustus.github.io/`

Simply visit that URL to see your flip card gallery! Hover over the photos to flip them and see your cute messages!

## 📁 File Structure
```
itsjustus.github.io/
├── index.html       (Main HTML file)
├── style.css        (Styling & animations)
├── script.js        (Photo data & gallery logic)
├── README.md        (This file)
└── photos/          (Your photo folder)
    ├── photo1.jpg
    ├── photo2.jpg
    └── ... (up to 15 photos)
```

## 🎨 Customization

### Change the Title
Edit the `<h1>` in `index.html`:
```html
<h1>✨ Our Favorite Memories ✨</h1>
```

### Change Colors
Edit the gradient in `style.css` (body section):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try different color combinations:
- Sunset: `#ff6b6b 0%, #ff8e53 100%`
- Ocean: `#2193b0 0%, #6dd5ed 100%`
- Forest: `#134e5e 0%, #71b280 100%`
- Pink: `#ff6ec7 0%, #a78bfa 100%`

## 📸 Tips for Best Results
- **Photo Resolution**: Use photos at least 800x600px for best quality
- **File Format**: JPG or PNG both work great
- **Messages**: Keep them short and sweet for mobile viewing
- **Emojis**: Add fun emojis to make it more personal! 😊
- **Dates**: Use consistent date format (e.g., "June 15, 2024")

## ❓ Troubleshooting

**Photos not showing?**
- Check that photo filenames in `script.js` match actual files in the `photos` folder
- Make sure paths start with `photos/` (case-sensitive!)

**Flip animation not working?**
- Try a different browser (Chrome, Firefox, Safari all work great)
- Make sure JavaScript is enabled

**Mobile: Photos not flipping?**
- Mobile devices may need a tap instead of hover
- The animation should work on tap automatically

## 💡 Ideas to Expand
- Add more emojis to messages
- Change the background gradient
- Create multiple pages for different events
- Share the link with family and friends!

---

**Made with 💕 for your special memories!**
