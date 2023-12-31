<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDrinksStore } from '@/stores/drinks';
import { useModalStore } from '@/stores/modal';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const modalStore = useModalStore();
const { toggleModal } = modalStore;
const { modal } = storeToRefs(modalStore);

const drinksStore = useDrinksStore();
const { recipe, ingredients } = storeToRefs(drinksStore);
</script>

<template>
  <TransitionRoot as="template" :show="modal">
    <Dialog as="div" class="relative z-10" @close="toggleModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
            <XMarkIcon
                      class="h-6 w-10 text-gray-800 cursor-pointer margin-left-0 absolute top-2 right-2 hover:text-gray-500"
                      @click="toggleModal"
                    />
              <div>
                <div class="mt-3">
                    <DialogTitle
                      as="h3"
                      class="text-gray-900 text-4xl font-extrabold my-5"
                    >
                      {{ recipe.strDrink }}
                    </DialogTitle>
                  <img :src="recipe.strDrinkThumb" :alt="recipe.strDrink" />

                  <DialogTitle
                    as="h3"
                    class="text-gray-900 text-4xl font-extrabold my-5"
                  >
                    Ingredientes y Cantidades
                  </DialogTitle>

                  <ul>
                    <li
                      v-for="ingredient in ingredients"
                      :key="ingredient"
                      class="text-lg text-gray-500"
                    >
                      {{ ingredient }}
                    </li>
                  </ul>

                  <DialogTitle
                    as="h3"
                    class="text-gray-900 text-4xl font-extrabold my-5"
                  >
                    Instrucciones
                  </DialogTitle>
                  <p class="text-lg text-gray-500">
                    {{ recipe.strInstructions }}
                  </p>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
