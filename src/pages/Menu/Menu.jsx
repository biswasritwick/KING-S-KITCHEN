import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import Button from "../../components/Button/Button";
import MenuCard from "../../components/MenuCard/MenuCard";
import MenuFilter from "../../components/MenuFilter/MenuFilter";
import Modal from "../../components/Modal/Modal";
import { menuCategories, menuData } from "../../data/menuData";
import "./Menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = "Menu | KING'S KITCHEN";
  }, []);

  const filteredMenu = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return menuData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <section className="page-hero menu-hero">
        <div className="container ">
          <div className="menu-hero__inner">
            <p className="eyebrow">Our menu</p>
            <h1>Made fresh. Served with heart.</h1>
            <p>
              From comforting classics to chef-led favourites, every dish is
              prepared with flavour, warmth and a sense of occasion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell menu-section">
        <div className="container">
          <div className="menu-toolbar">
            <MenuFilter
              categories={menuCategories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />

            <div className="search-box">
              <Search size={16} />
              <input
                type="search"
                value={searchTerm}
                placeholder="Search dishes..."
                aria-label="Search dishes"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {filteredMenu.length > 0 ? (
            <div className="menu-grid">
              {filteredMenu.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedItem}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No dishes found</h3>
              <p>Try another search or category.</p>
            </div>
          )}
        </div>
      </section>

      <Modal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />

      <section className="section-shell menu-cta">
        <div className="container menu-cta__wrap">
          <div>
            <p className="eyebrow">Need something special?</p>
            <h2>Let us create the right table for you.</h2>
          </div>
          <Button to="/contact" variant="primary">
            Book a Table →
          </Button>
        </div>
      </section>
    </>
  );
}

export default Menu;
