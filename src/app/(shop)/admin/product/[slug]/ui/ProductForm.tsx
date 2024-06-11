'use client';

import { useForm } from 'react-hook-form';
import {
  BrandCategory,
  Product,
  ProductImage as ProductWithImage,
} from '@/interfaces';
import { createUpdateProduct, deleteProductImage } from '@/actions';
import { useRouter } from 'next/navigation';
import { ProductImage } from '@/components';

interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] };
  categories: {
    id: string;
    name: string;
  }[];
}

interface FormInputs {
  title: string;
  slug: string;
  description: string;
  characteristics: string;
  price: number;
  inStock: number;
  brand: BrandCategory;
  categoryBrandId: string;
  images?: FileList;
}

export const ProductForm = ({ product, categories }: Props) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      images: undefined,
    },
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    const { images, ...productToSave } = data;

    if (product.id) {
      formData.append('id', product.id ?? '');
    }
    formData.append('title', productToSave.title);
    formData.append('slug', productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('characteristics', productToSave.characteristics);
    formData.append('price', productToSave.price.toString());
    formData.append('inStock', productToSave.inStock.toString());
    formData.append('brand', productToSave.brand);
    formData.append('categoryBrandId', productToSave.categoryBrandId);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }

    const { ok, product: updatedProduct } = await createUpdateProduct(formData);

    if (!ok) {
      alert('No se pudo actualizar el producto');
      return;
    }

    router.replace(`/admin/product/${updatedProduct?.slug}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3"
    >
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register('title', { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register('slug', { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
            {...register('description', { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register('price', { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Características</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register('characteristics', { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Marca</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register('brand', { required: true })}
          >
            <option value="">[Seleccione]</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Oppo">Oppo</option>
            <option value="Honor">Honor</option>
            <option value="Motorola">Motorola</option>
            <option value="Poco">Poco</option>
            <option value="Realme">Realme</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Categoría</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register('categoryBrandId', { required: true })}
          >
            <option value="">[Seleccione]</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Inventario</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register('inStock', { required: true, min: 0 })}
          />
        </div>
        {/* As checkboxes */}
        <div className="flex flex-col">
          <div className="flex flex-col mb-2">
            <span>Fotos</span>
            <input
              type="file"
              {...register('images')}
              multiple
              className="p-2 border rounded-md bg-gray-200"
              accept="image/png, image/jpeg image/jpg image/avif"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {product.ProductImage?.map((image) => (
              <div key={image.id}>
                <ProductImage
                  alt={product.title ?? ''}
                  src={image.url}
                  width={300}
                  height={300}
                  className="rounded-t-xl shadow-md object-cover w-full h-36"
                />
                <button
                  type="button"
                  onClick={() => deleteProductImage(image.id, image.url)}
                  className="btn-danger rounded-b-xl w-full"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};
