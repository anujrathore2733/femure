# Blog Content Management Guide

## How to Update Blog Content

### 1. JSON Structure
The blog content is stored in `src/data/blog-posts.json` with the following structure:

```json
{
  "id": "unique-post-id",
  "title": "Blog Post Title",
  "excerpt": "Short description of the post",
  "content": {
    "introduction": "Opening paragraph",
    "sections": [
      {
        "heading": "Section Title",
        "content": "Section content text",
        "list": ["Item 1", "Item 2", "Item 3"],
        "subsections": [
          {
            "heading": "Subsection Title",
            "content": "Subsection content",
            "list": ["Sub-item 1", "Sub-item 2"]
          }
        ]
      }
    ]
  },
  "author": "Dr. Name",
  "date": "2024-01-15",
  "readTime": "8 min read",
  "category": "Category Name",
  "image": "/img1.png",
  "featured": true,
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### 2. Adding New Blog Posts

1. Copy the Google Doc content
2. Structure it according to the JSON format above
3. Add the new post to `src/data/blog-posts.json`
4. Ensure the `id` is unique and URL-friendly (lowercase, hyphens)

### 3. Updating Existing Posts

1. Find the post in `src/data/blog-posts.json`
2. Update the content sections as needed
3. Save the file
4. The changes will automatically appear on the website

### 4. Content Structure Tips

- **Introduction**: Brief overview of the topic
- **Sections**: Main content areas with headings
- **Lists**: Use for bullet points and key information
- **Subsections**: For detailed breakdowns within sections
- **Tags**: Help with categorization and search

### 5. Categories Available
- PCOS
- Hormones
- Menstrual Health
- Mental Health
- Fertility
- Menopause

### 6. Images
Use existing images: `/img1.png`, `/img2.png`, `/img3.png`, `/img4.png

### 7. Authors
- Dr. Tanya Vaish
- Dr. Sakshi Bhadana
- Dr. Nisha Dhiman
- Dr. Pooja Patidar

## Example: Converting Google Doc to JSON

**Google Doc Content:**
```
Understanding PCOS

PCOS affects many women...

Symptoms include:
- Irregular periods
- Weight gain
- Acne

Treatment options:
1. Homeopathy
2. Lifestyle changes
```

**JSON Structure:**
```json
{
  "heading": "Understanding PCOS",
  "content": "PCOS affects many women...",
  "list": [
    "Irregular periods",
    "Weight gain", 
    "Acne"
  ],
  "subsections": [
    {
      "heading": "Treatment options",
      "list": [
        "Homeopathy",
        "Lifestyle changes"
      ]
    }
  ]
}
```

## Benefits of This System

1. **Easy Editing**: Just update the JSON file
2. **Structured Content**: Consistent formatting across all posts
3. **SEO Friendly**: Proper HTML structure for search engines
4. **Maintainable**: Clear separation of content and presentation
5. **Scalable**: Easy to add new posts and categories

