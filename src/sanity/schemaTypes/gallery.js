export default {
  name: "gallery",
  title: "Galeri Foto",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul / Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Lokasi (Opsional)",
      type: "string",
    },
    {
      name: "image",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true, // Agar bisa crop titik fokus
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Alam", value: "Nature" },
          { title: "Budaya", value: "Culture" },
          { title: "Kuliner", value: "Culinary" },
          { title: "Testimoni", value: "Testimonial" },
        ],
      },
    },
  ],
};
