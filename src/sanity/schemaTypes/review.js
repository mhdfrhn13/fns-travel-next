export default {
  name: "review",
  title: "Review Paket",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nama Reviewer",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: "comment",
      title: "Komentar",
      type: "text",
    },
    {
      name: "package",
      title: "Paket Wisata",
      type: "reference",
      to: [{ type: "itinerary" }], // Menghubungkan ke paket
    },
    {
      name: "isApproved",
      title: "Disetujui?",
      type: "boolean",
      description: "Review hanya akan muncul di web jika ini dicentang.",
      initialValue: false, // Default false agar tidak spam
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "comment",
    },
  },
};
