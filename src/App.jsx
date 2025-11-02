import React, { useState, useMemo } from 'react';
import { Search, Plus, User, Mail, Phone, X, Check, TrashIcon } from 'lucide-react';

// Helper function to get correct asset URLs with base path
const getImageURL = (path) => {
  // for GitHub Pages
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};

// Mock initial contacts 
const initialContacts = [
  { id: 1, name: 'Abraxas', email: 'abraxas@gmail.com', phone: '+91 99999 99990', image: getImageURL('/images/abraxas.jpg') },
  { id: 2, name: 'Canterella', email: 'cantarella@gmail.com', phone: '+91 99999 99991' , image: getImageURL('/images/canterella.jpg')},
  { id: 3, name: 'Carthethiya', email: 'carth@gmail.com', phone: '+91 99999 99992' , image: getImageURL('/images/carthethiya.jpg')},
  { id: 4, name: 'Brant', email: 'brant@gmail.com', phone: '+91 99999 99993' , image: getImageURL('/images/brant.jpg')},
  { id: 5, name: 'Pheobe', email: 'peeb@gmail.com', phone: '+91 99999 99994' , image: getImageURL('/images/pheobe.jpg')},
  { id: 6, name: 'Chisa', email: 'chisa@gmail.com', phone: '+91 99999 99995' , image: getImageURL('/images/chisa.jpg')},
  { id: 7, name: 'Zani', email: 'zani@gmail.com', phone: '+91 99999 99996' , image: getImageURL('/images/zani.jpg')},
  { id: 8, name: 'Jinshi', email: 'jinny@gmail.com', phone: '+91 99999 99997' , image: getImageURL('/images/jinshi.jpg')},
];

export default function ContactList() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
  });

  // Filter contacts based on search query
const filteredContacts = useMemo(() => {
  let result = [...contacts];

  // (A → Z)
  result.sort((a, b) => a.name.localeCompare(b.name));

  // Apply search filter if query exists
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    result = result.filter(contact =>
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query)
    );
  }

  return result;
}, [contacts, searchQuery]);


  const handleAddContact = (e) => {
    e.preventDefault();
    
    if (!newContact.name.trim() || !newContact.email.trim()) {
      return;
    }
    const phoneDigits = newContact.phone.replace(/\D/g, '');
    if (!phoneDigits.startsWith('91') || phoneDigits.length !== 12) {
      alert("Please enter a valid 10-digit phone number after +91");
      return;
    }
    const contact = {
      id: Date.now(),
      ...newContact
    };

    setContacts([contact, ...contacts]);
    setNewContact({ name: '', email: '', phone: ''});
    setIsAddingContact(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDeleteContact = (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this contact?");
  if (confirmed) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  };

  const handleCancel = () => {
    setIsAddingContact(false);
    setNewContact({ name: '', email: '', phone: ''});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contacts</h1>
          <p className="text-gray-600">Manage and search your contact list</p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
            <Check className="text-green-600" size={20} />
            <span className="text-green-800 font-medium">Contact added successfully!</span>
          </div>
        )}

        {/* Search and Add Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search contacts by name, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            onClick={() => setIsAddingContact(true)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
          >
            <Plus size={20} />
            Add Contact
          </button>
        </div>

        {/* Add Contact Form */}
        {isAddingContact && (
          <div className="mb-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Contact</h2>
            <form onSubmit={handleAddContact} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Abraxas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={newContact.email}
                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="abraxas@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                    </label>
                  <input
                    type="tel"
                    required
                    value={newContact.phone}
                  pattern="^\+91 [0-9]{5} [0-9]{5}$"
                  title="Enter number as +91 99999 99999"      
                    onChange={(e) => {
                      let input = e.target.value.replace(/\D/g, ''); // remove non-digits
                      if (!input.startsWith('91')) input = '91' + input; 
                      input = input.slice(0, 12); 
                      const formatted = `+${input.slice(0, 2)} ${input.slice(2, 7)}${input.length > 7 ? ' ' + input.slice(7) : ''}`;
                      setNewContact({ ...newContact, phone: formatted });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="+91 xxxxx xxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    type="text"
                    value={newContact.image}
                    onChange={(e) => setNewContact({ ...newContact, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://example.com/photo.jpg or /images/photo.jpg"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Add Contact
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-4 text-sm text-gray-600">
            Found {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''}
          </div>
        )}

        {/* Contacts Grid */}
        {filteredContacts.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <User className="mx-auto mb-4 text-gray-300" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
            <p className="text-gray-500">
              {searchQuery ? 'Try adjusting your search query' : 'Add your first contact to get started'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all duration-200 hover:border-indigo-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border-2 border-indigo-200">
                    {contact.image ? (
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {contact.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                   <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg truncate">
                      {contact.name}
                    </h3>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                      title="Delete Contact"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={14} className="flex-shrink-0 text-gray-400" />
                        <a href={`mailto:${contact.email}`} className="hover:text-indigo-600 truncate">
                          {contact.email}
                        </a>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone size={14} className="flex-shrink-0 text-gray-400" />
                          <a href={`tel:${contact.phone}`} className="hover:text-indigo-600">
                            {contact.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Total {contacts.length} contact{contacts.length !== 1 ? 's' : ''} in your list
        </div>
      </div>
    </div>
  );
}