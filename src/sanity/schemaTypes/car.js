export default {
  name: "car",
  title: "Mobil",
  type: "document",
  fields: [
    { name: "name", title: "Nama Mobil", type: "string" },
    {
      name: "type",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "MPV", value: "MPV" },
          { title: "MPV Premium", value: "MPV Premium" },
          { title: "Minibus", value: "Minibus" },
        ],
      },
    },
    {
      name: "image",
      title: "Foto Mobil",
      type: "image",
      options: { hotspot: true },
    },
    { name: "capacity", title: "Kapasitas (Orang)", type: "string" },
    { name: "price", title: "Harga Sewa (Teks)", type: "string" }, // Misal: "Rp 600.000 / Hari"
    { name: "description", title: "Deskripsi", type: "text" },
    {
      name: "features",
      title: "Fitur",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
