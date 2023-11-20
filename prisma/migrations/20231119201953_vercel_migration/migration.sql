-- CreateTable
CREATE TABLE "authors" (
    "author_id" SERIAL NOT NULL,
    "name" VARCHAR(100),

    CONSTRAINT "pk_authors" PRIMARY KEY ("author_id")
);

-- CreateTable
CREATE TABLE "publications" (
    "publication_id" SERIAL NOT NULL,
    "author_id" INTEGER,
    "title" VARCHAR(200),
    "year" DATE,

    CONSTRAINT "pk_publications" PRIMARY KEY ("publication_id")
);

-- CreateTable
CREATE TABLE "quotes" (
    "quote_id" SERIAL NOT NULL,
    "publication_id" INTEGER,
    "quote_text" TEXT,

    CONSTRAINT "pk_quotes" PRIMARY KEY ("quote_id")
);

-- AddForeignKey
ALTER TABLE "publications" ADD CONSTRAINT "fk_publications_authors" FOREIGN KEY ("author_id") REFERENCES "authors"("author_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "fk_quotes_publications" FOREIGN KEY ("publication_id") REFERENCES "publications"("publication_id") ON DELETE CASCADE ON UPDATE CASCADE;
