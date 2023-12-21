export type Photo = {
  /** Имя файла с фотографией товара */
  photo: string;
};

export type Category = {
  /** Идентификатор категории */
  id: number;

  /** Название категории */
  name: string;

  /** Название фотографии, отображающую категорию */
  photo: string;
};

export type Properties = {
  /** Флаг показывающий, что этот товар хит сезона */
  hit: boolean;

  /** Флаг показывающий, что этот товар новинка сезона  */
  nеw: boolean;
};

export type Product = {
  /** Уникальный идентификатор товара */
  id: number;

  /** Название товара */
  name: string;

  /** Массив с разными фотографиями одного и того же товара */
  photos: Photo[];

  /** Описание товара */
  desc: string;

  /** Дата постановки товара на учёт. Дата создания записи в базе данных */
  createAt: string;

  /** Старая цена товара */
  oldPrice: number;

  /** Текущая цена товара */
  price: number;

  /** Объект, содержащий информацию о категории к которой принадлежит товар */
  category: Category;

  /** Дополнительные свойства товара */
  properties: Properties;
};
