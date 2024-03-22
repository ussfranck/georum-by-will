"use client";

import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import styles from "../css/Ressources.module.css";
import { SpotlightCard } from "../components/SpotlightCard";
import { AllViewFragment } from "./AllFragment";
import { AllDocumentsFragment } from "./DocFragment";
import { AllSoftwareFragment } from "./SoftwareFragment";
import { AllExtrsFilesFragment } from "./ExtraFragment";
import { TABS_POSITION } from "../lib/definitions";
import { ServerDataPlaceHolder } from "../lib/placeholder";
import { useSearch } from "../hooks/searchContext";
import { PreFooterBanner } from "../components/PreFooter";

export default function Ressource() {

  const [tabPos, setTabPos] = useState<TABS_POSITION | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedFilter, setSelectedFilter] = useState<TABS_POSITION | null>(null);

  const { retraceFileFound } = useSearch();

  const perfomsSearch = function (query: string, filterId: TABS_POSITION) {
    // perform search logic using searchQuery and selectedFilter
    const categorie = ServerDataPlaceHolder.data.find(cat => cat.target === filterId);
    if (categorie) {
      const matchingFiles = categorie.data.filter(data => data.name.toLocaleUpperCase().includes(query.toUpperCase()));
      if (matchingFiles.length > 0) {
        alert(`${matchingFiles.length} fichier(s) correspondant(s)`);
        matchingFiles.forEach(file => retraceFileFound(file.name));
        // console.info(matchingFiles);
      } else {
        alert("No file found matching search criteria");
      }
    } else {
      // console.error("Error on Database");
    }
  };

  const handleSearchInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = function (filter: TABS_POSITION) {
    setSelectedFilter(filter);
  };

  const handleTabEvent = function (tabId: TABS_POSITION) {
    setTabPos(tabId);
  };

  const handleSearchSubmit = function (event: React.FormEvent) {
    event.preventDefault();
    if (searchQuery === "" || searchQuery === undefined) {
      alert("Entrez le nom d'un document.");
      return;
    }
    if (selectedFilter === null) {
      alert("Selectionner egalement un filtre");
      return;
    }
    setTabPos(selectedFilter);
    perfomsSearch(searchQuery, selectedFilter);
  };

  useEffect(() => {
    setTabPos(TABS_POSITION.ALL_FILES);
  }, []);

  return (
    <React.Fragment>
      <Header currentIndex={3} />
      <section className={styles.ress_hero_landing}>
        <div className={`${styles.ress_hero_landing__review} flex`}>
          <h2>Find Ressource what you want.</h2>
          <span>Quick • Easy • Guranted</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptatum doloribus
            impedit at iste ut explicabo tempora.
          </p>
        </div>
        <div className={`${styles.ress_hero_landing__search} flex`}>
          <form className={`${styles.ress_hero_landing__search_form} flex`} onSubmit={(e) => handleSearchSubmit(e)}>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </svg>
            <input type="text" placeholder="Search for a ressource" name={"searchQuery"} id={"searchQuery"}
              value={searchQuery} onChange={handleSearchInputChange} />
            <button type="submit" className={"button primary-button"}>
              <span>Rechercher</span>
            </button>
          </form>
          <div className={`${styles.ress_hero_landing__filters} flex`}>
            <h3>En fonction de : </h3>
            <div className={`${styles.radio_tile_group} flex`}>
              <div className={styles.radio_tile_group_input_container}>
                <input id="docs" className={styles.radio_tile_group_input_container_radio_btn} type="radio" name="radio" onClick={() => handleFilterChange(TABS_POSITION.ALL_DOCUMENTS)} />
                <div className={styles.radio_tile_group_input_container_radio_tile}>
                  <div className={`${styles.radio_tile_group_input_container_radio_icon}  docs-icon`}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path>
                    </svg>
                  </div>
                  <label htmlFor="docs" className={styles.radio_tile_group_input_container_radio_tile_label}>Docs</label>
                </div>
              </div>

              <div className={styles.radio_tile_group_input_container}>
                <input id="software" className={styles.radio_tile_group_input_container_radio_btn} type="radio" name="radio" onClick={() => handleFilterChange(TABS_POSITION.ALL_SOFTWARES)} />
                <div className={styles.radio_tile_group_input_container_radio_tile}>
                  <div className={`${styles.radio_tile_group_input_container_radio_icon} software-icon`}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path>
                    </svg>
                  </div>
                  <label htmlFor="software" className={styles.radio_tile_group_input_container_radio_tile_label}>Logiciel</label>
                </div>
              </div>

              <div className={styles.radio_tile_group_input_container} >
                <input id="extra" className={styles.radio_tile_group_input_container_radio_btn} type="radio" name="radio" onClick={() => handleFilterChange(TABS_POSITION.ALL_EXTRAS)} />
                <div className={styles.radio_tile_group_input_container_radio_tile}>
                  <div className={`${styles.radio_tile_group_input_container_radio_icon} extra-icon`}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                  </div>
                  <label htmlFor="extra" className={styles.radio_tile_group_input_container_radio_tile_label}>Extra</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.ress_hero_landing__in_spotlights} flex`}>
        <h2>Georum • A la une</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, exercitationem debitis. Voluptatem, excepturi, sint perferendis officia dolorem praesentium veniam
        </p>
        <div className={`${styles.ress_hero_landing__in_spotlights__content} grid`}>
          <SpotlightCard />
          <SpotlightCard />
          <SpotlightCard />
        </div>
      </section>
      <section>
        <div className={`${styles.ress_tabs} flex`}>
          {/* Litterals value ahead ! • ('alls_files') */}
          <div className={`${styles.ress_tabs_tab} ${tabPos === TABS_POSITION.ALL_FILES ? styles.__active : undefined} flex`}
            onClick={() => handleTabEvent(TABS_POSITION.ALL_FILES)}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
              <path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,19c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v14ZM5,10c0-.55,.45-1,1-1H15c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm0-4c0-.55,.45-1,1-1h6c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm14,8c0,.55-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1h12c.55,0,1,.45,1,1Zm-9,4c0,.55-.45,1-1,1h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z" />
            </svg>
            <span>Tous</span>
          </div>
          <div className={`${styles.ress_tabs_tab} ${tabPos === TABS_POSITION.ALL_DOCUMENTS ? styles.__active : undefined}  flex`}
            onClick={() => handleTabEvent(TABS_POSITION.ALL_DOCUMENTS)}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
              <path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,19c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v14ZM5,10c0-.55,.45-1,1-1H15c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm0-4c0-.55,.45-1,1-1h6c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm14,8c0,.55-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1h12c.55,0,1,.45,1,1Zm-9,4c0,.55-.45,1-1,1h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z" />
            </svg>
            <span>Documents</span>
          </div>
          <div className={`${styles.ress_tabs_tab} ${tabPos === TABS_POSITION.ALL_SOFTWARES ? styles.__active : undefined} flex`}
            onClick={() => handleTabEvent(TABS_POSITION.ALL_SOFTWARES)}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
              <path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,19c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v14ZM5,10c0-.55,.45-1,1-1H15c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm0-4c0-.55,.45-1,1-1h6c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm14,8c0,.55-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1h12c.55,0,1,.45,1,1Zm-9,4c0,.55-.45,1-1,1h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z" />
            </svg>
            <span>Logiciel</span>
          </div>
          <div className={`${styles.ress_tabs_tab} ${tabPos === TABS_POSITION.ALL_EXTRAS ? styles.__active : undefined} flex`}
            onClick={() => handleTabEvent(TABS_POSITION.ALL_EXTRAS)}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
              <path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,19c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v14ZM5,10c0-.55,.45-1,1-1H15c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm0-4c0-.55,.45-1,1-1h6c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1Zm14,8c0,.55-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1h12c.55,0,1,.45,1,1Zm-9,4c0,.55-.45,1-1,1h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z" />
            </svg>
            <span>Extra</span>
          </div>
        </div>
        <div className={`${styles.ress_tabs__fragments} flex`}>
          {tabPos === TABS_POSITION.ALL_FILES && (
            <AllViewFragment />
          )}
          {tabPos === TABS_POSITION.ALL_DOCUMENTS && (
            <AllDocumentsFragment />
          )}
          {tabPos === TABS_POSITION.ALL_SOFTWARES && (
            <AllSoftwareFragment />
          )}
          {tabPos === TABS_POSITION.ALL_EXTRAS && (
            <AllExtrsFilesFragment />
          )}
        </div>
      </section>
      <div className={styles.floating_action_button}>
        <span>Comment trouvez-vous cette page ?</span>
      </div>
      <PreFooterBanner />
    </React.Fragment>
  );
};