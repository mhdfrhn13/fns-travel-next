export default {
  name: "itinerary",
  title: "Paket Wisata",
  type: "document",
  fields: [
    { name: "title", title: "Judul Paket", type: "string" },
    {
      name: "isFeatured",
      title: "Tampilkan di Home",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "region",
      title: "Wilayah",
      type: "string",
      options: {
        list: [
          { title: "Sumatra", value: "sumatra" },
          { title: "Jawa dan Bali", value: "jawa-bali" },
          { title: "Lainnya", value: "lainnya" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "description", title: "Deskripsi Singkat", type: "text" },
    { name: "duration", title: "Durasi", type: "string" }, // e.g. "3 Days 2 Nights"
    { name: "price", title: "Harga", type: "string" },
    {
      name: "includes",
      title: "Termasuk (Include)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "excludes",
      title: "Tidak Termasuk (Exclude)",
      type: "array",
      of: [{ type: "string" }],
    },
    // Field Kompleks untuk Itinerary per hari
    {
      name: "days",
      title: "Rencana Perjalanan",
      type: "array",
      of: [
        {
          type: "object",
          title: "Hari",
          fields: [
            { name: "day", title: "Hari Ke-", type: "number" },
            { name: "title", title: "Judul Kegiatan", type: "string" },
            { name: "image", title: "Foto Kegiatan", type: "image" },
            {
              name: "activities",
              title: "List Aktivitas",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
