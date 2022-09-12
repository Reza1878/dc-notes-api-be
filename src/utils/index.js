const mapDBToModel = (note) => ({
  ...note,
  createdAt: note.created_at,
  updatedAt: note.updatedAt,
});

module.exports = { mapDBToModel };
